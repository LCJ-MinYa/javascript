const userTemplate = `
    <p>{name}</p>
    <p>{age}</p>
`;

exports.build = list => {
    let content = '';
    list.forEach(actor => {
        content += userTemplate.replace('{name}', actor.name).replace('{age}', actor.age);
    });
    return content;
};