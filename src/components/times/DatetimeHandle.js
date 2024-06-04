import React from 'react'

export default function DatetimeHandle(data) {

    const toISOStringWithTimezone = date => {       // gan them timezone cho chuoi ISO date string( ham mac dinh toISOString chi la UTC)
        const tzOffset = -date.getTimezoneOffset();
        const diff = tzOffset >= 0 ? '+' : '-';
        const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) +
            diff + pad(tzOffset / 60) +
            ':' + pad(tzOffset % 60);
    }

    const convertToDateTime = date => {            // chuyển sang datetime
        return date.slice(0, 19).replace('T', ' ')
    }

    return convertToDateTime(toISOStringWithTimezone(data))
}
