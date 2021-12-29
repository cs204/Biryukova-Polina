module.exports = class Agenda extends Array
{
    add(node)
    {
        this.unshift(node)
    }

    getNode()
    {
        return this.shift()
    }

    notEmpty()
    {
        return this.length !== 0
    }
}