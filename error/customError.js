class customDbError extends Error {
    constructor(message) {
        super(message);
        this.name = 'customError';
    }
}

module.exports = customDbError;