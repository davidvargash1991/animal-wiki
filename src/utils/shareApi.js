export const browserhasShareApi = navigator.share;

export const share = (linkTitle) => {
  navigator.share({
    title: linkTitle,
    text: "Animal Wiki",
    url: document.location.href,
  });
};
