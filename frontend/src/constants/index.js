// TODO: change to environment url
// const baseApiUrl = "https://live-chat-box.herokuapp.com";
const baseApiUrl = "https://localhost:5001";
export const websocketHubUrl = `${baseApiUrl}/hubs/chat`;
export const sendMessageHubUrl = `${baseApiUrl}/chat/messages`;
export const randomNameApiUrl =
  "https://random-name-generator-api.herokuapp.com/name";

export const sendMessageHubMethod = "SendMessage";
export const receiveMessageClientMethod = "BroadcastMessage";

export const signInHubMethod = "SignIn";
export const userNotificationClientMethod = "NewUserNotification";
