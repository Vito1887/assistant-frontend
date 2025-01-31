export const getAPIUrl = (protocol: 'https' | 'wss') => {
  const API_PROTOCOL = protocol;

  return `${API_PROTOCOL}://example.su`;
};

export const makeFormData = (params: Record<string, string>): FormData => {
  const formData = new FormData();
  const keys = Object.keys(params);

  keys.forEach((key) => {
    const value = params[key];

    if (value !== undefined) {
      formData.append(
        key,
        Array.isArray(value) || (typeof value === 'object' && key !== 'file')
          ? JSON.stringify(value)
          : value
      );
    }
  });

  return formData;
};
