const unit = require("./UnitOfWork");
const error = require("./error");

module.exports = class articleAndCommentAction{

    static getAllArticles(req, res, payload, cb) 
    {
        cb(null, unit.getInstance());
    }
    static readArticleById(req, res, payload, cb) 
    {
        let result = unit.getInstance().articles.filter((item) => {
            return item.id == payload.id;
        });
        result != undefined ? cb(null, result) : cb(error.ITEM_NOT_FOUND, null);
    }
    static createArticle(req, res, payload, cb) 
    {

    }
    static updateArticle(req, res, payload, cb) 
    {
        const result = { c: payload.a + payload.b };
        cb(null, result);
    }
    static deleteArticle(req, res, payload, cb) 
    {
        const result = { c: payload.a + payload.b };
        cb(null, result);
    }
    
    static createComment(req, res, payload, cb) 
    {
        const result = { c: payload.a + payload.b };
        cb(null, result);
    }
    static deleteComment(req, res, payload, cb) 
    {
        const result = { c: payload.a + payload.b };
        cb(null, result);
    }
    static requestInvalid(req, res, payload, cb) 
    {
        const result = { c: payload.a + payload.b };
        cb(null, result);
    }
}