export const equalAddresses = (address1: string, address2: string) => {
  return address1.toLowerCase() === address2.toLowerCase();
};

export const shortenAddress = (address: string, max = 4): string => {
  return address
    ? `${address.slice(0, max)}...${address.slice(address.length - max, address.length)}`
    : '';
};
