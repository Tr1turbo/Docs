function redirectToLocale() {
    const locales = {
        root: '/Docs/',
        'zh-hant': '/Docs/zh-hant/',
        'zh-hans': '/Docs/zh-hans/',
        ja: '/Docs/ja/',
        ko: '/Docs/ko/'
    };

    const savedLang = getCookie('savedLang');
    const userLang = savedLang || navigator.language;
    
    const langPrefix = userLang.toLowerCase().startsWith('zh')
        ? userLang.toLowerCase().includes('cn')
            ? 'zh-hans'
            : userLang.toLowerCase().includes('hans')
                ? userLang
                : 'zh-hant'
        : userLang.split('-')[0];

    const matchedLocale = locales[langPrefix] || locales.root;

    if (typeof window === 'undefined') {
        console.log('Not in browser environment, skipping redirection.');
        return;
    }

    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);

    if (currentPath.startsWith(matchedLocale) || currentPath.startsWith(matchedLocale.slice(0, -1))) {
        console.log('Already at the correct path, no redirection needed.');
        return;
    }

    let pathSuffix = currentPath;
    Object.values(locales).forEach(localePath => {
        if (currentPath.startsWith(localePath)) {
            pathSuffix = currentPath.slice(localePath.length);
        }
    });

    const newPath = `${matchedLocale}${pathSuffix}`
        .replace(/([^:])\/+/g, '$1/')
        .replace(/\/+$/, '');

    console.log('Redirecting to:', newPath);
    window.location.replace(newPath);
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

export default redirectToLocale;