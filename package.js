Package.describe({
    name: "new3rs:jssgf",
    version: '0.2.1',
    summary: "jssgf - SGF parser",
    git: 'https://github.com/new3Rs/meteor-jssgf.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.addFiles('jssgf.js');
    api.export('jssgf');
});
