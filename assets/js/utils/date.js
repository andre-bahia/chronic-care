function DateFunctions(){

    function convertStringInDate(date){
        const[day, month, year] = date.split("/");
        return new Date(year, month - 1, day);    
    }

    function returnYearOfPerson(birthday){
        debugger;
        const valueOfBirthDay = {
            day: birthday.getDate(),
            month: birthday.getMonth() + 1,
            year: birthday.getFullYear()
        }
        
        const today = new Date();
        const valueOfToday = {
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear()
        }
        let year = valueOfToday.year - valueOfBirthDay.year;

        if(valueOfToday.month < valueOfBirthDay.month)
            year -= 1;
        
        if(valueOfToday.month === valueOfBirthDay.month && valueOfToday.day < valueOfBirthDay.day)
            year -= 1;

        return year;
    }

    return {
        convertStringInDate: convertStringInDate,
        returnYearOfPerson:returnYearOfPerson
    }
}