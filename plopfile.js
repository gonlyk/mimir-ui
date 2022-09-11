const fs = require('fs')
const path = require('path')

/**
 * 
 * @param {import('plop').NodePlopAPI} plop 
 */
module.exports = plop => {
    plop.setActionType('mkdir', function (answers, config, plop) {
        if (!config.name || !config.path) {
            throw `'name' and 'path' props are required`
        }

        let dest = config.path
        for (const prop in answers) {
            const reg = new RegExp(`\{\{\\s*${prop}\\s*\}\}`, 'g');
            const properCaseReg = new RegExp(`\{\{\\s*properCase\\s+${prop}\\s*\}\}`, 'g')
            dest = dest.replace(reg, answers[prop])
                .replace(properCaseReg, answers[prop].slice(0, 1).toUpperCase() + answers[prop].slice(1))
        }

        console.log(dest)
        try {
            fs.mkdirSync(path.join(__dirname, dest, config.name))
        } catch (e) {
            throw `mkdir ${config.path} fail`
        }

        const successMsg = '/' + dest + '/' + config.name
        return successMsg.replace('//', '/')
    })

    plop.setGenerator('component', {
        description: 'create a custom component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name',
                default: 'MyComponent'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'stories/{{properCase name}}/index.ts',
                templateFile: 'plop-template/component/index.hbs'
            },
            {
                type: 'add',
                path: 'stories/{{properCase name}}/{{properCase name}}.tsx',
                templateFile: 'plop-template/component/component.hbs'
            },
            {
                type: 'add',
                path: 'stories/{{properCase name}}/{{properCase name}}.stories.tsx',
                templateFile: 'plop-template/component/component.stories.hbs'
            },
            {
                type: 'add',
                path: 'stories/{{properCase name}}/style/index.less',
                templateFile: 'plop-template/component/style/index.hbs'
            },
            {
                type: 'add',
                path: 'stories/{{properCase name}}/style/standard.less',
                templateFile: 'plop-template/component/style/standard.hbs'
            },
            {
                type: 'add',
                path: 'stories/{{properCase name}}/__tests__/index.tsx',
                templateFile: 'plop-template/component/__tests__/index.hbs'
            },
            {
                type: 'mkdir',
                name: 'test',
                path: 'stories/{{properCase name}}'
            },
        ]
    })
}