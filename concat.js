//测试git使用

const fs = require("fs");
const concat = (answers) => {
    const files = fs.readdirSync(process.cwd());
    //过滤文件
    const concatFiles = files.filter((item) => {
        if(item.endsWith("." + type)) {
            return true;
        }
    })
    const content = concatFiles.reduce((prev, item, index) => {
        const fileContent = fs.readFileSync(process.cwd() + "/" + item);
        // console.log(`${type}`);
        if(`${type}` == "js") {
            return `
                ${prev}
                \/\/ ${item}
                ${fileContent.toString()}
            `
        }else if(`${type}` == "css") {
            return `
                ${prev} /\* ${item} \*/\ ${fileContent.toString()}
            `
        }
        /*  */
    },"")
    fs.writeFileSync(`./${answers.name}.${type}`,content );
    // console.log(concatFiles,type, answers.name);
}

module.exports = concat;
