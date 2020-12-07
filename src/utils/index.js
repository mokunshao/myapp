export function localSave(key, data) {
    if (data != null && typeof data === 'object') {
        data = JSON.stringify(data);
    }
    localStorage.setItem(key, data);
}

export function localGet(key) {
    const val = localStorage.getItem(key);
    if (val === 'null') {
        return null;
    } else if (val === undefined || val === 'undefined') {
        return undefined;
    } else {
        try {
            return JSON.parse(val); //解析成功说明是JSON
        } catch (e) {
            //解析失败按原值返回
            return val;
        }
    }
}

export function localRemove(...keys) {
    for (let key of keys) {
        localStorage.removeItem(key);
    }
}

export function formatDate(unixTime) {
    return new Date(unixTime * 1000).toLocaleDateString();
}
