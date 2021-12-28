const pgClient = require('../index');

exports.createUniversity = async (country, city, name, accreditation) => {
    try {
        await pgClient.query(`INSERT into universities(country, city, name, accreditation) values('${country}', '${city}', '${name}', '${accreditation}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

exports.getUniversityById = async (id) => {
    try {
        const university = await pgClient.query(`SELECT * FROM universities WHERE id = ${id} LIMIT 1`);
        return { result: university.rows[0] };
    } catch (e) {
        return { error: e.message };
    }
};

exports.getEveryUniversities = async (page, perPage, name) => {
    try {
        switch (true) {
            case (!!page && !!perPage && !!name): {
                const university = await pgClient.query(`SELECT * FROM (SELECT * FROM universities OFFSET ${page - 1} LIMIT ${perPage}) page WHERE page.name ILIKE '%${name}%' `);
                return { result: university.rows };
            }
            case (!!page && !!perPage): {
                const university = await pgClient.query(`SELECT * FROM universities OFFSET ${page - 1} LIMIT ${perPage}`);
                return { result: university.rows };
            }
            case (!!page): {
                const university = await pgClient.query(`SELECT * FROM universities OFFSET ${page - 1} LIMIT 10`);
                return { result: university.rows };
            }
            case (!!perPage): {
                const university = await pgClient.query(`SELECT * FROM universities LIMIT ${perPage}`);
                return { result: university.rows };
            }
            case (!!name): {
                const university = await pgClient.query(`SELECT * FROM universities WHERE name LIKE '%${name}%' LIMIT ${perPage}`);
                return { result: university.rows };
            }
            default: {
                const university = await pgClient.query(`SELECT * FROM universities`);
                return { result: university.rows };
            }
        }
    } catch (e) {
        return { error: e.message };
    }
};

