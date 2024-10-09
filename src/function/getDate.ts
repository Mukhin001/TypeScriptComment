type Date = { day: string, month: string, year: number };



export function setDateFn() {
    const newDate = new Date();

    const date:Date = {
        day: (newDate.getDate() + 1 < 10) ? '0' + newDate.getDate() : '' + newDate.getDate(),
        month: (newDate.getMonth() + 1 < 10) ? '0' + (1 + newDate.getMonth()) : '' + (1 + newDate.getMonth()),
        year: newDate.getFullYear(),
    };

    return date;
};