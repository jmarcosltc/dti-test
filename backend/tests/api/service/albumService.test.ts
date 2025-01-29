import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAlbumsByUserId,
  getPhotosByAlbumId,
  updateAlbum,
} from "../../../src/api/service/album/albumService";
import { readDB, writeDB } from "../../../src/dbService";
import { Album } from "../../../src/model/album/Album";

jest.mock("../../../src/dbService", () => ({
  readDB: jest.fn(),
  writeDB: jest.fn(),
}));

const mockReadDB = readDB as jest.MockedFunction<typeof readDB>;
const mockWriteDB = writeDB as jest.MockedFunction<typeof writeDB>;

const mockAlbums = [
  { id: 101, userId: 1, title: "Album One" },
  { id: 102, userId: 1, title: "Album Two" },
  { id: 103, userId: 2, title: "Another User's Album" },
];

const mockPhotos = [
  { id: 201, albumId: 101, title: "Photo One", url: "/img1.jpg" },
  { id: 202, albumId: 102, title: "Photo Two", url: "/img2.jpg" },
];

describe("Album Service Tests", () => {
  beforeEach(() => {
    mockReadDB.mockResolvedValue({
      albums: mockAlbums,
      photos: mockPhotos,
      deletedAlbums: [],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return albums for a given user", async () => {
    const albums = await getAlbumsByUserId("1");
    expect(albums).toHaveLength(2);
    expect(albums[0].title).toBe("Album One");
  });

  it("should return an album by ID", async () => {
    const album = await getAlbumById(101);
    expect(album).toBeDefined();
    expect(album?.title).toBe("Album One");
  });

  it("should return null for a deleted album", async () => {
    mockReadDB.mockResolvedValue({
      albums: mockAlbums,
      photos: mockPhotos,
      deletedAlbums: [101],
    });

    const album = await getAlbumById(101);
    expect(album).toBeNull();
  });

  it("should create a new album", async () => {
    const newAlbumData: Album = { id: 0, userId: 3, title: "New Album" };
    const createdAlbum = await createAlbum(newAlbumData);

    expect(createdAlbum).toBeDefined();
    expect(createdAlbum.id).toBe(99 + mockAlbums.length);
    expect(createdAlbum.title).toBe("New Album");
    expect(mockWriteDB).toHaveBeenCalledTimes(1);
  });

  it("should delete an album by ID", async () => {
    const result = await deleteAlbum(101);
    expect(result).toBe(true);
    expect(mockWriteDB).toHaveBeenCalledTimes(1);
  });

  it("should update an existing album", async () => {
    const updatedData = { title: "Updated Album" };
    const updatedAlbum = await updateAlbum(101, updatedData);

    expect(updatedAlbum).toBeDefined();
    expect(updatedAlbum?.title).toBe("Updated Album");
    expect(mockWriteDB).toHaveBeenCalledTimes(1);
  });

  it("should return null when updating a non-existent album", async () => {
    const updatedAlbum = await updateAlbum(999, { title: "Non-existent Album" });
    expect(updatedAlbum).toBeNull();
    expect(mockWriteDB).not.toHaveBeenCalled();
  });

  it("should return photos for an album", async () => {
    const photos = await getPhotosByAlbumId("101");
    expect(photos).toHaveLength(1);
    expect(photos[0].title).toBe("Photo One");
  });

  it("should return an empty array if the album has no photos", async () => {
    const photos = await getPhotosByAlbumId("999");
    expect(photos).toEqual([]);
  });
});
