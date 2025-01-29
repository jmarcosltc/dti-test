declare global {
    interface Window {
        env: {
            BE_API_URL: string;
        };
    }
}

const env = {
    BE_API_URL: "http://localhost:3080"
};

export default env;