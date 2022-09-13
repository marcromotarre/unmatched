import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DECKS from "../../data/decks";
import { Box, Card, Modal, Stack, Typography, Button } from "@mui/material";
import UnmatchedCard from "../../components/UnmatchedCard";
import UnmatchedFilter from "../../components/UnmatchedFilter";
import {
  ATTACK_IMAGE,
  ATTACK_UNSELECTED_IMAGE,
  DEFENSE_IMAGE,
  DEFENSE_UNSELECTED_IMAGE,
  SCHEME_IMAGE,
  SCHEME_UNSELECTED_IMAGE,
  VERSATILE_IMAGE,
  VERSATILE_UNSELECTED_IMAGE,
} from "../../data/images";
import { characterNames } from "../../data/characters";

function About() {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardTypesFilter, setCardTypesFilter] = useState({
    attack: false,
    defense: false,
    versatile: false,
    scheme: false,
  });
  const [charactersFilter, setCharactersFilter] = useState({});
  const router = useRouter();
  useEffect(() => {
    const _cards = [
      ...cards.sort((a, b) => {
       // if (a.discarted === true && b.discarted === false) return 1;
       // if (a.discarted === false && b.discarted === true) return -1;
        if (a.type !== "scheme" && b.type === "scheme") return -1;
        if (a.type === "scheme" && b.type !== "scheme") return 1;
        if (a.type !== "scheme" && b.type === "scheme") return -1;
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        if (a.value === b.value) return 0;
      }),
    ];
    let filteredTypes = [];
    let filteredCharacters = [];
    Object.keys(charactersFilter).forEach((characterFilter) => {
      if (charactersFilter[characterFilter] === true) {
        filteredCharacters.push(characterFilter);
      }
    });
    if (cardTypesFilter.attack) {
      filteredTypes.push("attack");
    }
    if (cardTypesFilter.defense) {
      filteredTypes.push("defense");
    }
    if (cardTypesFilter.scheme) {
      filteredTypes.push("scheme");
    }
    if (cardTypesFilter.versatile) {
      filteredTypes.push("versatile");
    }
    if (filteredTypes.length > 0 || filteredCharacters.length > 0) {
      if (filteredTypes.length > 0 && filteredCharacters.length === 0) {
        setFilteredCards(
          _cards.filter(({ type }) => filteredTypes.includes(type))
        );
      } else if (filteredTypes.length === 0 && filteredCharacters.length > 0) {
        setFilteredCards(
          _cards.filter(
            ({ characterName }) =>
              characterName === "ANY" ||
              filteredCharacters.includes(characterNames[characterName].slug)
          )
        );
      } else {
        setFilteredCards(
          _cards.filter(
            ({ type, characterName }) =>
              (filteredTypes.includes(type) && characterName === "ANY") ||
              (characterName !== "ANY" &&
                filteredTypes.includes(type) &&
                filteredCharacters.includes(characterNames[characterName].slug))
          )
        );
      }
    } else {
      setFilteredCards(_cards);
    }
  }, [cardTypesFilter, charactersFilter, deck]);

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      const d = DECKS.decks.find((deck) => deck.slug === slug);
      let cards = [];
      d.cards.forEach((card) => {
        const quantity = card.quantity;
        delete card.quantity;
        const arr = new Array(quantity).fill(card);
        cards = [...cards, ...arr];
      });
      d.cards = [
        ...cards.map((card, index) => ({
          ...card,
          discarted: false,
          id: index,
        })),
      ];
      setDeck(d);
      setCards(d.cards);
      setFilteredCards(d.cards);
      let charcaters = {};

      [...d.heroes, ...d.sidekicks].forEach((character) => {
        charcaters[character.slug] = false;
      });

      setCharactersFilter(charcaters);
      console.log(d);
    }
  }, [router.query]);
  if (!deck) return;

  return (
    <Box>
      <Box
        sx={{
          borderBottom: "1px solid black",
          position: "fixed",
          height: "80px",
          zIndex: "30",
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {[...deck.heroes, ...deck.sidekicks].map((character, index) => (
          <UnmatchedFilter
            key={index}
            name={character.name}
            slug={character.slug}
            totalCards={
              deck.cards.filter(
                ({ characterName }) =>
                  characterName === "ANY" ||
                  character.slug === characterNames[characterName]?.slug
              ).length
            }
            cardsLeft={
              deck.cards.filter(
                ({ characterName, discarted }) =>
                  (characterName === "ANY" ||
                    character.slug === characterNames[characterName]?.slug) &&
                  discarted === false
              ).length
            }
            value={charactersFilter[character.slug]}
            onClickFilter={(filterValue) =>
              setCharactersFilter({
                ...charactersFilter,
                [character.slug]: filterValue,
              })
            }
          />
        ))}

        <UnmatchedFilter
          totalCards={deck.cards.filter(({ type }) => type === "attack").length}
          cardsLeft={
            deck.cards.filter(
              ({ type, discarted }) => type === "attack" && discarted === false
            ).length
          }
          image={ATTACK_IMAGE.src}
          unselectedImage={ATTACK_UNSELECTED_IMAGE.src}
          color="#F8372F"
          value={cardTypesFilter.attack}
          onClickFilter={(filterValue) =>
            setCardTypesFilter({ ...cardTypesFilter, attack: filterValue })
          }
        />
        <UnmatchedFilter
          totalCards={
            deck.cards.filter(({ type }) => type === "defense").length
          }
          cardsLeft={
            deck.cards.filter(
              ({ type, discarted }) => type === "defense" && discarted === false
            ).length
          }
          image={DEFENSE_IMAGE.src}
          unselectedImage={DEFENSE_UNSELECTED_IMAGE.src}
          color="#0684DB"
          value={cardTypesFilter.defense}
          onClickFilter={(filterValue) =>
            setCardTypesFilter({ ...cardTypesFilter, defense: filterValue })
          }
        />
        <UnmatchedFilter
          totalCards={
            deck.cards.filter(({ type }) => type === "versatile").length
          }
          cardsLeft={
            deck.cards.filter(
              ({ type, discarted }) =>
                type === "versatile" && discarted === false
            ).length
          }
          image={VERSATILE_IMAGE.src}
          unselectedImage={VERSATILE_UNSELECTED_IMAGE.src}
          color="#9941BB"
          value={cardTypesFilter.versatile}
          onClickFilter={(filterValue) =>
            setCardTypesFilter({ ...cardTypesFilter, versatile: filterValue })
          }
        />
        <UnmatchedFilter
          totalCards={deck.cards.filter(({ type }) => type === "scheme").length}
          cardsLeft={
            deck.cards.filter(
              ({ type, discarted }) => type === "scheme" && discarted === false
            ).length
          }
          image={SCHEME_IMAGE.src}
          unselectedImage={SCHEME_UNSELECTED_IMAGE.src}
          color="#FABC67"
          value={cardTypesFilter.scheme}
          onClickFilter={(filterValue) =>
            setCardTypesFilter({ ...cardTypesFilter, scheme: filterValue })
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            width: "calc(100% - 40px)",
            marginTop: "100px",
            marginBottom: "20px",
          }}
          direction={"column"}
          spacing={2}
        >
          {filteredCards.map((card, index) => (
            <UnmatchedCard
              key={index}
              title={card.title}
              type={card.type}
              value={card.value}
              characterName={card.characterName}
              discarted={card.discarted}
              basicText={card.basicText}
              immediateText={card.immediateText}
              duringText={card.duringText}
              afterText={card.afterText}
              boost={card.boost}
              discardCard={() => {
                const _cards = [...deck.cards];
                const index = _cards.findIndex(({id}) => id === card.id)
                _cards[index].discarted =  !_cards[index].discarted;
                console.log(_cards);
                setDeck({ ...deck, cards: _cards });
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default About;
