module Data.GameMode exposing (GameMode(..), allows, decode, default, encode, fromString, name, toString)

import Enum exposing (Enum)
import Json.Decode exposing (Decoder)
import Json.Encode exposing (Value)


type GameMode
    = HeadToHead
    | Multiplayer
    | Both


gameMode : Enum GameMode
gameMode =
    Enum.create
        [ ( "headToHead", HeadToHead )
        , ( "both", Both )
        , ( "multiplayer", Multiplayer )
        ]


fromString : String -> Maybe GameMode
fromString =
    gameMode.fromString


toString : GameMode -> String
toString =
    gameMode.toString


default : GameMode
default =
    Both


name : GameMode -> String
name mode =
    case mode of
        HeadToHead ->
            "1v1"

        Multiplayer ->
            "Multiplayer"

        Both ->
            "1v1 & Multiplayer"


allows : GameMode -> GameMode -> Bool
allows target current =
    current == Both || current == target


decode : Decoder GameMode
decode =
    gameMode.decoder


encode : GameMode -> Value
encode =
    gameMode.encode
