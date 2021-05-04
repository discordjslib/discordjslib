module.exports = class MessageEmbed {
    constructor(data) {
        if (!data) data = 1
        this.title = data.title || null
        this.description = data.description || null
        this.fields = data.fields || []
        this.author = data.author || null
        this.color = data.color || data.colour || null
        this.colour = data.color || data.colour || null
        this.url = data.url || null
        this.timestamp = data.timestamp || null
        this.thumbnail = data.thumbnail || null
        this.footer = data.footer || null
        this.files = data.files || []

    }
    addTitle(title) {
        this.title = title
        return this
    }
    addDescription(description) {
        this.description = description
        return this
    }
    addField(field) {
        if (typeof field !== 'object') throw new Error('.addField() takes an object')
        this.fields.push(field)
        return this
    }
    addAuthor(author) {
        this.author = author
        return this
    }
    addColor(color) {
        this.color = color
        return this
    }
    addColour(colour) {
        this.color = colour
        return this
    }
    addURL(url) {
        this.url = url
        return this
    }
    addTimestamp(timestamp) {
        this.timestamp = timestamp
        return this
    }
    addThumbnail(thumbnail) {
        this.thumbnail = thumbnail
        return this
    }
    addFile(file) {
        this.files.push(file)
        return this
    }
    addFooter(footer) {
        if (typeof footer === 'string') {
            console.log()
            this.footer = {
                name: footer
            }
            return this
        } else {
            this.footer = footer
        }
    }
    toObject() {
        return {
            title: this.title || null,
            description: this.description || null,
            fields: this.fields || [],
            author: this.author || null,
            color: this.color || this.colour || null,
            url: this.url || null,
            timestamp: this.timestamp || null,
            thumbnail: this.thumbnail || null,
            footer: this.footer || null,
            files: this.files || [],
        }
    }
}