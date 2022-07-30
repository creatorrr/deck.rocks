// utils/businessModel.ts

import _ from "lodash";

import gdps from "../data/gdps";
import { localEmbed } from "../utils/similarity";

export interface BusinessModel {
  name: string;
  slug: string;
  description: string;
  examples: string[];
  embedding: Promise<number[][]>;
}

export const makeBusinessModel = (
  name: string,
  description: string,
  examples: string[]
): BusinessModel => ({
  name,
  description: description.trim(),
  slug: _.snakeCase(name),
  examples,
  embedding: localEmbed(name),
});

export const one_mil: number = 1_000_000;

export const getComparableGDP = (marketSize: number): [string, number] =>
  _(gdps)
    .entries()
    .map(([entity, gdp]) => [entity + "'s GDP", gdp * one_mil])
    .filter(([_entity, gdp]) => gdp < marketSize)
    .maxBy(1) as any;
