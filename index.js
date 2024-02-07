export const handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        id: 1,
        name: "Reyco Seguma"
      }),
    };
    return response;
};
  