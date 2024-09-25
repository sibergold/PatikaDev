const fs = require('fs');

// fs.writeFile('employee.json','{"name":"Employee 1 Name", "salary":2000}','utf8',(err) =>{
//     if(err) console.log(err);
//     console.log("JSON DOSYASI OLUŞTURULDU")
// });

fs.readFile('employee.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);

    let employee = JSON.parse(data);


    employee.salary = 2500;


    fs.writeFile('employee.json', JSON.stringify(employee, null, 2), 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("JSON DOSYASI GÜNCELLENDİ");
        console.log(employee);   
    });
});
