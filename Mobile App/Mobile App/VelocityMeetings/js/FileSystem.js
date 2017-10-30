/*
var WriteStream = {
    ///Write File Function
    WriteFile: function (filename, objtoWrite) {
        _filename = filename;
        _dataobj = objtoWrite;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, _gotFSWrite, fail);
    },

    //Ignore these functions.
    _dataobj: null,
    _filename: "",
    _gotFileWriter: function (writer) {
        writer.onwrite = function (evt) {
            console.log("write success");
        };

        writer.write(_dataobj);
        writer.abort();
    },

    _gotFSWrite: function () {
    fileSystem.root.getFile(_filename, { create: true }, _gotFileEntryWrite, fail);
    },
    _gotFileEntryWrite: function (fileEntry) {
        fileEntry.createWriter(_gotFileWriter, fail);
    },
    _fail: function (error) {

    }
};


var ReadStream = {

    ReadFile: function (filename) {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSRead, fail);

        return _dataread;
    },

    //Ignore These Function
    _filename: "",
    _dataread: null,
    _gotFSRead: function () {
        fileSystem.root.getFile(_filename, { create: true }, _gotFileEntryRead, fail);
    },
    _gotFileEntryRead: function (fileEntry) {
        fileEntry.file(gotFileRead, fail);
    },
    _gotFileRead: function (file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {

        };
        dataread = reader.readAsText(file);
    },
    _fail: function (error) {

    }
};
*/
///File Stream Class. Simple Holder for Reader and Writer
/*
var FileStream = {

    WriteFile: function (filename, objtoWrite) {
        
        this._filename = filename;
        this._dataobj = objtoWrite;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this._gotFSWrite, this._fail);
    },

    WriteFile: function (filename, objtoWrite, type) {

        this._filename = filename;
        this._dataobj = objtoWrite;
        this._type = type;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this._gotFSWrite, this._fail);
    },

    ReadFile: function (filename,callback) {
        alert("ReadFile Called");
        this._filename = filename;
        alert("FileName Set");
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this._gotFSRead, this._fail);

        _callback = callback;
    },

    //Ignore These Function
    _callback: function() {},
    _dataread: null,
    _dataobj: null,
    _type : "WRITE",
    _filename: "",
    _gotFileWriter: function (writer) {
        writer.onwrite = function (evt) {
        };
        if (this._type == "WRITE")
            writer.write(this._dataobj);
        if (this._type == "APPEND")
        {
            writer.seek(writer.length);
            wr.write(this._dataobj);
        }
        writer.abort();
    },

    _gotFSWrite: function (fileSystem) {
        fileSystem.root.getFile(this._filename, { create: true }, this._gotFileEntryWrite, this._fail);
    },
    _gotFileEntryWrite: function (fileEntry) {
        fileEntry.createWriter(this._gotFileWriter, this._fail);
    },
    _gotFSRead: function (fileSystem) {
        alert("gotFSRead Called");
        fileSystem.root.getFile(this._filename, { create: true }, this._gotFileEntryRead, this._fail);
    },
    _gotFileEntryRead: function (fileEntry) {
        alert("gotFileEntryRead Called");
        fileEntry.file(this._gotFileRead, this._fail);
    },
    _gotFileRead: function (file) {
        alert("gotFileRead Called");
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            _callback(evt.target.result);
            //_dataread = evt.target.result;
        };
        reader.readAsText(file);
        
    },
    _fail: function (error) {
        throw "File Failed";

    }
};*/

var storage = window.localStorage;


function SaveSettings(settings)
{
    storage.setItem("settings", settings);
}

function GetSettings()
{
    return storage.getItem("settings");
}