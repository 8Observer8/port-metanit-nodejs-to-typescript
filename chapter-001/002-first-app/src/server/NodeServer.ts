
import * as Http from "http";

class NodeServer
{
    private _server: Http.Server;
    private readonly _port = 3000;

    public constructor()
    {
        this._server = Http.createServer((request, response) =>
        {
            response.end("Hello NodeJS!");
        });
        
        this._server.listen(this._port, "127.0.0.1", () =>
        {
            console.log(`Listening on port: ${this._port}`);
        })
    }
}

export default NodeServer;