FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY ./src/*.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY ./src .
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim
WORKDIR /app
COPY --from=build-env /app/out .

# Run the app on container startup
# ENTRYPOINT [ "dotnet", "LiveChat.dll" ]
CMD ASPNETCORE_URLS=http://*:$PORT dotnet LiveChat.dll