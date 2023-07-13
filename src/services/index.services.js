const url = "https://juancabanaapi.onrender.com/portfolio";

export const getDataEnglish = async () => {
  const data = await fetch(`${url}/english`).then(
    (res) => res.json()
  );
  localStorage.setItem('dataEnglish', JSON.stringify(data));
};

export const getDataSpanish = async () => {
  const data = await fetch(`${url}/spanish`).then(
    (res) => res.json()
    );
    localStorage.setItem('dataSpanish', JSON.stringify(data));
};
