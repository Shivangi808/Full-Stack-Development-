const employee={
    empId:2,
    name:'Ram',
    designation:'Java Developer',
    teckstack:[{
        lang:"java",
        server:'Apache Tomcat',
        database:'mySQL',
        database2:'mongodb'
    },
{
        lang:"python",
        server:'Django',
        database:'mySQL',
        database2:'mongodb'
    },
{
        lang:"react",
        server:'Node Server',
        database:'mySQL',
        database2:'mongodb'
    }]
}
console.log(employee.empId)
console.log(employee.name)
console.log(employee.designation)
console.log(employee.teckstack)
console.log(employee.teckstack.database)
console.log(employee.teckstack[0])
console.log(employee.teckstack[1])
console.log(employee.teckstack[2])
console.log(employee.teckstack[0].server)
console.log(employee.teckstack[1].server)
console.log(employee.teckstack[2].server)