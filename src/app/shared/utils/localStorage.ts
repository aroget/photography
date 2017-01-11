export const LOCAL_STORAGE_KEY = {
  'PROFILE': 'profile'
};

export function setStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
};

export function getStorage(key: string) {
  return localStorage.getItem(key);
};

export function deleteStorage(key: string): void {
  localStorage.removeItem(key);
};
