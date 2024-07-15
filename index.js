/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
 
  function createTimeInEvent(dateTime) {
    this.timeInEvents.push({
      type: "TimeIn",
      date: dateTime.split(' ')[0],
      hour: parseInt(dateTime.split(' ')[1])
    });
    return this;
  }
  
 
  function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({
      type: "TimeOut",
      date: dateTime.split(' ')[0],
      hour: parseInt(dateTime.split(' ')[1])
    });
    return this;
  }
  
  
  function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(event => event.date === date).hour;
    let timeOut = this.timeOutEvents.find(event => event.date === date).hour;
    return (timeOut - timeIn) / 100;
  }
  
  
  function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
  }
  

  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
  }  

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable
}



