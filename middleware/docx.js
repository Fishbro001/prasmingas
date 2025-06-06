const { TemplateHandler } = require('easy-template-x');
const fs = require('fs');
const path = require('path');
// const toPDFConverter = require('docx-pdf'); not needed

async function generateDocument(data) {
    try {
        // Read the template file
       // const template = fs.readFileSync(templatePath);
        const template = fs.readFileSync('./resources/date.docx');
        console.log('Template loaded successfully.');

        // Generate the report by replacing placeholders with actual data

        const testdata = {
            date: '2025-03-04',
            orderNumber: '123456',
            mainNumber: '37061436986',
            mainEmail: 'asd@gmail.com',
            mainAddress:'Kaunas, kauno g. 5',
            tripName: 'Tripas vienas',
            tripDate: '2025-01-01',
            tripDuration: '3 dienos',
            numberofCust: '3 žmonės',
            totalPrice: '360',
            users: [
                {   name:'pijus', 
                    birthdate:'1997-07-05',
                    phoneNumber:'37061436986',
                    pickupPlace:'Vienozinskis',
                    occupiedSeat:'B2',
                    price:'80'
                },
                {   name:'pijus2', 
                    birthdate:'1997-07-05',
                    phoneNumber:'37061436986',
                    pickupPlace:'Vienozinskis',
                    occupiedSeat:'B3',
                    price:'360'
                },
                {   name:'pijus3', 
                    birthdate:'1997-07-05',
                    phoneNumber:'37061436986',
                    pickupPlace:'Vienozinskis',
                    occupiedSeat:'B4',
                    price:'200'
                },
                {   name:'pijus4', 
                    birthdate:'1997-07-05',
                    phoneNumber:'37061436986',
                    pickupPlace:'Vienozinskis',
                    occupiedSeat:'C1',
                    price:'150'
                },
                
            ]
        }
       const handler = new TemplateHandler();
       const doc = await handler.process(template, testdata); 

        // Save the generated document to a file
        const outputPath = path.join(__dirname, '../resources/output.pdf');
            //fs.writeFileSync(outputPath, report);
        fs.writeFileSync(outputPath, doc);
        // not needed
        // toPDFConverter(path.join(__dirname, '../resources/output.docx'), path.join(__dirname, '../resources/output.docx'),()=>
        //     {if(err){console.log(err);}
        // }); not needed

        console.log('Document generated successfully at:', outputPath);
        return outputPath;
    } catch (err) {
        console.error('Error generating document:', err);
    }
}

// generateDocument();

module.exports = generateDocument;
 const template = fs.readFileSync('./resources/examples/Keliones sutartis.docx');