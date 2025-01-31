export const required = (value) => value.trim() !== "";
export const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
export const minLength = (length) => (value) => value.length >= length;
