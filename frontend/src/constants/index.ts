const baseApiUrl = import.meta.env.VITE_API_URL ?? "https://localhost:5001";
export const websocketHubUrl = `${baseApiUrl}/hubs/chat`;
export const sendMessageHubUrl = `${baseApiUrl}/chat/messages`;
export const randomNameApiUrl =
  "https://random-name-generator-api.herokuapp.com/name";
