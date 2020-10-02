const mockHttpRequest = {
  get: () =>
    Promise.resolve({
      name: "Rafael Sena",
      members: [{ name: "Chatloiro" }],
    }),
};

export default mockHttpRequest;