(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,List,Html,Client,Attr,Tags,T,Concurrency,Remoting,AjaxRemotingProvider,EventsPervasives,Operators,EntryPoint;
 Runtime.Define(Global,{
  Program:{
   Client:{
    Main:function()
    {
     var x,input,x1,output,arg10,arg101,_this,arg00,arg102,arg103,arg104;
     x=List.ofArray([Attr.Attr().NewAttr("value","")]);
     input=Tags.Tags().NewTag("input",x);
     x1=Runtime.New(T,{
      $:0
     });
     output=Tags.Tags().NewTag("h1",x1);
     arg101=List.ofArray([Tags.Tags().text("Send")]);
     _this=Tags.Tags().NewTag("button",arg101);
     arg00=function()
     {
      return function()
      {
       return Concurrency.Start(Concurrency.Delay(function()
       {
        return Concurrency.Bind(AjaxRemotingProvider.Async("MyFirstWebSharperSitelet:0",[input.get_Value()]),function(_arg11)
        {
         output.set_Text(_arg11);
         return Concurrency.Return(null);
        });
       }),{
        $:0
       });
      };
     };
     EventsPervasives.Events().OnClick(arg00,_this);
     arg102=Runtime.New(T,{
      $:0
     });
     arg103=List.ofArray([Attr.Attr().NewAttr("class","text-muted")]);
     arg104=List.ofArray([Attr.Attr().NewAttr("class","jumbotron")]);
     arg10=List.ofArray([input,_this,Tags.Tags().NewTag("hr",arg102),Operators.add(Tags.Tags().NewTag("h4",arg103),List.ofArray([Tags.Tags().text("The server responded:")])),Operators.add(Tags.Tags().NewTag("div",arg104),List.ofArray([output]))]);
     return Tags.Tags().NewTag("div",arg10);
    }
   }
  },
  WebSharper:{
   EntryPoint:{
    Example:Runtime.Field(function()
    {
     return null;
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  List=Runtime.Safe(Global.WebSharper.List);
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client=Runtime.Safe(Html.Client);
  Attr=Runtime.Safe(Client.Attr);
  Tags=Runtime.Safe(Client.Tags);
  T=Runtime.Safe(List.T);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  EventsPervasives=Runtime.Safe(Client.EventsPervasives);
  Operators=Runtime.Safe(Client.Operators);
  return EntryPoint=Runtime.Safe(Global.WebSharper.EntryPoint);
 });
 Runtime.OnLoad(function()
 {
  EntryPoint.Example();
  return;
 });
}());
