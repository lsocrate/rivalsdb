module Pages.Deck.View.Id_ exposing (Model, Msg, page)

import API.Decklist
import Deck exposing (DeckPostSave)
import Effect exposing (Effect)
import Gen.Params.Deck.View.Id_ exposing (Params)
import Gen.Route as Route
import Html exposing (Html, a, li, span, text, ul)
import Html.Attributes exposing (class, href)
import Page
import Request
import Shared
import UI.ActionBar
import UI.Decklist
import UI.Icon as Icon
import UI.Layout.Deck
import UI.Layout.Template
import View exposing (View)


page : Shared.Model -> Request.With Params -> Page.With Model Msg
page shared req =
    Page.advanced
        { init = init shared req
        , update = update
        , view = view shared
        , subscriptions = always Sub.none
        }



-- INIT


type Model
    = Loading
    | Viewing DeckPostSave


init : Shared.Model -> Request.With Params -> ( Model, Effect Msg )
init shared req =
    ( Loading
    , Effect.fromCmd <| API.Decklist.read shared.collection FetchedDecklist req.params.id
    )


type Msg
    = FromShared Shared.Msg
    | FetchedDecklist API.Decklist.ResultRead


update : Msg -> Model -> ( Model, Effect Msg )
update msg model =
    case msg of
        FromShared subMsg ->
            ( model, Effect.fromShared subMsg )

        FetchedDecklist (Ok deck) ->
            ( Viewing deck, Effect.none )

        FetchedDecklist (Err _) ->
            ( model, Effect.none )


view : Shared.Model -> Model -> View Msg
view shared model =
    case model of
        Loading ->
            UI.Layout.Template.view FromShared shared [ text "Loading" ]

        Viewing deck ->
            viewDecklist shared deck


viewDecklist : Shared.Model -> DeckPostSave -> View Msg
viewDecklist shared deck =
    UI.Layout.Template.view FromShared
        shared
        [ UI.Layout.Deck.readMode
            { actions = viewActions shared.user deck.meta
            , decklist = [ UI.Decklist.viewDeck deck ]
            }
        ]


viewActions : Maybe Shared.User -> Deck.MetaPostSave -> List (Html Msg)
viewActions maybeUser meta =
    case maybeUser of
        Nothing ->
            []

        Just user ->
            if user.id == meta.ownerId then
                [ UI.ActionBar.view
                    [ { icon = Icon.Edit
                      , name = "Edit"
                      , action = Nothing
                      , href = Just (Route.Deck__Edit__Id_ { id = meta.id })
                      }
                    ]
                ]

            else
                []
