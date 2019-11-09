export type Value = object | string | number;
export type ValueCallback = () => Value;
export type Values = {[key: string]: Value | ValueCallback};
export type ValuesCallback = () => Values;
export type Key = string;
export type LanguageIdentifier = string;
export type Translation = string;
export type Strings = {[key: string]: string | Strings};
export type TranslationCache = {[key: string]: Translation};

export type StringsLoader = (lang: LanguageIdentifier, config: ITranslateConfig) => Promise<Strings>;
export type InterpolateFunction = (text: string,
                                   values: Values | ValuesCallback | null,
                                   config: ITranslateConfig) => Translation;
export type EmptyFunction = (key: Key, config: ITranslateConfig) => string;
export type LookupFunction = (key: Key, config: ITranslateConfig) => string | null;

export const LANG_CHANGED_EVENT = "langChanged";

export type LangChangedEvent = {
	previousLang?: LanguageIdentifier;
	previousStrings?: Strings;
	strings: Strings;
	lang: LanguageIdentifier;
};

export interface ITranslateConfig {
	loader: StringsLoader;
	interpolate: InterpolateFunction;
	empty: EmptyFunction;
	lookup: LookupFunction;
	translationCache: TranslationCache;
	lang?: LanguageIdentifier;
	strings?: Strings;
}

export const CLEANUP_PARTS_MS = 1000 * 60;
export type LangChangedDirectiveCallback = ((e?: LangChangedEvent) => any);

/* Extend the global event handlers map with the history related events */
declare global {
	interface GlobalEventHandlersEventMap {
		"langChanged": CustomEvent<LangChangedEvent>
	}
}