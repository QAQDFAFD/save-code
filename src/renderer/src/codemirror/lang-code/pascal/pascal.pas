program GreetingsNumberOfTimes;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;

var
  greetingsMessage: string;
  numberOfTimes, i: integer;

begin
  try
    { TODO -oUser -cConsole Main : Insert code here }
    greetingsMessage := 'Hello World!';
    numberOfTimes := 10;

    for i := 1 to numberOfTimes do
    begin
      Writeln(greetingsMessage);
    end;
  except
    on E: Exception do
      Writeln(E.ClassName, ': ', E.Message);
  end;
end.
