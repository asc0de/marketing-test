const socialConstants = {
    url: encodeURIComponent(window.location.href),
    title: encodeURIComponent("Чтобы выиграть путешествие, перейди по ссылке!"),
    imageUrl: encodeURIComponent("https://assets.hotellook.com/kandidat/upload/h9c554mu.png"),
    modal: {
        height: 650,
        width: 650
    }
};
socialConstants.modal.top = (window.screen.height - socialConstants.modal.height) / 2;
socialConstants.modal.left = (window.screen.width - socialConstants.modal.width) / 2;

export function showVkModal() {
    const { url, title, imageUrl } = socialConstants;
    const vkUrl = `https://vk.com/share.php?url=${url}&title=${title}&image=${imageUrl}`;
    return showShareWindow(vkUrl, "VK");
}

export function showFacebookModal() {
    const { title, url, imageUrl } = socialConstants;
    const facebookUrl = `https://www.facebook.com/dialog/feed?app_id=839461852912049
    &redirect_uri=${url}
    &link=${url}
    &picture=${imageUrl}
    &caption=${title}`;
    return showShareWindow(facebookUrl, "Facebook");
}

export function showTwitterModal() {
    const { url, title } = socialConstants;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${title}%20${url}`;
    return showShareWindow(twitterUrl, "Twitter");
}

export function showOKModal() {
    const { url, title, imageUrl } = socialConstants;
    const okUrl = `https://connect.ok.ru/offer?url=${url}&title=${title}&imageUrl=${imageUrl}`;
    return showShareWindow(okUrl, "OK");
}

function showShareWindow(link, title) {
    const { height, width, top, left } = socialConstants.modal;
    return window.open(link, title, `width=${width},height=${height},top=${top},left=${left}`);
}
