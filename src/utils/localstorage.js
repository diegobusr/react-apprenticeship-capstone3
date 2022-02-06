export const getStorage = (key) => {
  try {
    const rawValue = window.localStorage.getItem(key);
    return JSON.parse(rawValue);
  } catch (error) {
    console.error(`Error parsing storage item "${key}".`);
    return null;
  }
};

export const setStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));
