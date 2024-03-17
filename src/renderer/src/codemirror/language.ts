const importers = import.meta.glob<string>('./lang-code/*/index.ts')
// 键是语言代码，值是语言的导入函数
const languages: { [key in string]: () => any } = {}
Object.keys(importers).forEach(fileName => {
	const language = fileName.replace('./lang-code/', '').replace('/index.ts', '')
	languages[language] = importers[fileName]
})

export default languages
