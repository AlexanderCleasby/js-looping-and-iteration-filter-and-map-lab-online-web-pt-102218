// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    return drivers.filter((driver)=>{
        return driver.revenue>=revenue
    })
}

function driverNamesWithRevenueOver(drivers,revenue){
    return driversWithRevenueOver(drivers,revenue).map((driver)=>{
        return driver.name
    })
}

function exactMatch(drivers,ops){
    return drivers.filter((driver)=>{
        return driver[Object.keys(ops)[0]]==Object.values(ops)[0]
    })
}
function exactMatchToList(drivers,ops){
    
    return exactMatch(drivers,ops).map((driver)=>{
        return driver.name
    })
}
