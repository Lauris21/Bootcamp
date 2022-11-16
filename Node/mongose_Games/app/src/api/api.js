const getData = async (url) => {
  try {
    const data = await fetch(url);
    const dataToJson = await data.json();
    return dataToJson;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
