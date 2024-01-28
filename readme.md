# Pokemon Type Weakness Calculator

<p align="center">
  <img alt="" src="https://img.shields.io/github/license/yashrajbharti/Pokemon-Weakness-Calculator">
  <img alt="" src="https://img.shields.io/github/issues/yashrajbharti/Pokemon-Weakness-Calculator?color=blue">
  <img alt="" src="https://img.shields.io/github/forks/yashrajbharti/Pokemon-Weakness-Calculator?style=social">
  <img alt="" src="https://img.shields.io/github/languages/top/yashrajbharti/Pokemon-Weakness-Calculator?color=f0db4f">
</p>

This web application calculates the type multipliers for types of Pokemon. It takes two Pokemon types as input and provides a list of multipliers based on their strengths and weaknesses.

## Purpose

Understanding type multipliers is crucial in Pokemon battles, as they affect the effectiveness of attacks. This calculator simplifies the process of determining the multipliers for Pokemon-type.

## Data

| Types    | 0.5x                                                                 | 2x                                    |
| -------- | -------------------------------------------------------------------- | ------------------------------------- |
| Bug      | Fighting, Grass, Ground                                              | Fire, Flying, Rock                    |
| Dark     | Dark, Ghost, Psychic                                                 | Bug, Fairy, Fighting                  |
| Dragon   | Electric, Fire, Grass, Water                                         | Dragon, Fairy, Ice                    |
| Electric | Electric, Flying, Steel                                              | Ground                                |
| Fairy    | Bug, Dark, Dragon, Fighting                                          | Poison, Steel                         |
| Fighting | Bug, Dark, Rock                                                      | Fairy, Flying, Psychic                |
| Fire     | Bug, Fire, Grass, Ice, Steel                                         | Ground, Rock, Water                   |
| Flying   | Bug, Fighting, Grass, Ground                                         | Electric, Ice, Rock                   |
| Ghost    | Bug, Fighting, Normal, Poison                                        | Dark, Ghost                           |
| Grass    | Electric, Grass, Ground, Water                                       | Bug, Fire, Flying, Ice, Poison        |
| Ground   | Electric, Poison, Rock                                               | Grass, Ice, Water                     |
| Ice      | Ice                                                                  | Fighting, Fire, Rock, Steel           |
| Normal   | Ghost                                                                | Fighting                              |
| Poison   | Fairy, Fighting, Grass, Poison, Bug                                  | Ground, Psychic                       |
| Psychic  | Fighting, Psychic                                                    | Bug, Dark, Ghost                      |
| Rock     | Fire, Flying, Normal, Poison                                         | Fighting, Grass, Ground, Steel, Water |
| Steel    | Bug, Dragon, Fairy, Flying, Grass, Ice, Poison, Psychic, Rock, Steel | Fighting, Fire, Ground                |
| Water    | Fire, Ice, Steel, Water                                              | Electric, Grass                       |

## Usage

1. Select the first Pokemon type from the dropdown.
2. Select the second Pokemon type from the dropdown.
3. Click the "Calculate Multipliers" button to see the type multipliers.

## Alternate Usage (with help of query strings)

1. The url `https://yashrajbharti.github.io/Pokemon-Weakness-Calculator` can detect query string and give the results.
2. For example, writing `/?type1=normal&type2=none` after the url will show results for normal type multipliers.
3. Similary we can specify `type1` and `type2` to get the results directly in the url.
4. Lastly if you do not add `type2` for a single-type Pokémon, it will automatically default to `none`

## Contributing

Contributions are welcome! If you have suggestions, improvements, or new features to add, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/yashrajbharti/Pokemon-Weakness-Calculator/blob/main/LICENSE) file for details.

---

©2024 [yashrajbharti](https://github.com/yashrajbharti) Github
