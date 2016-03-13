open System
open System.IO
open System.Collections
open WebSharper
open WebSharper.InterfaceGenerator
open WebSharper.JavaScript
open WebSharper.Html
open WebSharper.Html.Client
open WebSharper.Html.Server

open WebSharper.Sitelets
open WebSharper.Web
open WebSharper.WebExtensions

module Server =
    [<Server>]
    let DoWork (s : string) =
        async {
            return System.String(List.ofSeq s |> List.rev |> Array.ofList)
        }

[<Client>]
module Client =
    open WebSharper.JavaScript
    open WebSharper.Html.Client

    let Main () =
        let input = Input [Attr.Value ""]
        let output = H1 []
        Div [
            input
            Button([Text "Send"])
                .OnClick (fun _ _ ->
                    async {
                        let! data = Server.DoWork input.Value
                        output.Text <- data
                    }
                    |> Async.Start
                )
            HR []
            H4 [Class "text-muted"] -- Text "The server responded:"
            Div [Class "jumbotron"] -< [output]
        ]

    
        

let MySite =
    Warp.CreateSPA (fun ctx ->
        [ H1 [Text "Say Hi to the server"]
          Div [ClientSide <@ Client.Main() @>]
         
        ]) 
                                  
[<EntryPoint>]
do Warp.RunAndWaitForInput(MySite) |> ignore











