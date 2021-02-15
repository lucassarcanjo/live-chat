const baseApiUrl = "https://localhost:5001" || process.env.REACT_APP_API_URL;
export const websocketHubUrl = "${/hubs/chat";
export const sendMessageHubUrl = `${baseApiUrl}/chat/messages`;
export const randomNameApiUrl =
  "https://random-name-generator-api.herokuapp.com/name";

export const sendMessageHubMethod = "SendMessage";
export const receiveMessageClientMethod = "BroadcastMessage";

export const signInHubMethod = "SignIn";
export const userNotificationClientMethod = "NewUserNotification";
