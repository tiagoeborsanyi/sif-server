export const filterData = value => {
    if (value) {
        return value.split('T')[0].split('-')[2]+'/'+value.split('T')[0].split('-')[1]+'/'+value.split('T')[0].split('-')[0]
    }
    return null;
}