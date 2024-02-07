export const handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data: [
          {
            id: 1,
            name: "Reyco Seguma"
          },
          {
            id: 2,
            name: "Kezeah Seguma"
          }
        ]
      }),
    };
    return response;
};
  