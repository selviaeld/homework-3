export interface Track {
    album: Album;
    artists: Artist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: null;
    track_number: number;
    type: string;
    uri: string;
}
  
export interface likedSong {
    track: Track;
}

export interface Library {
    track: Track;
}
  
export interface Album {
    album_type: string;
    artists: Artist[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: Date;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}
  
export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}
  
export interface ExternalUrls {
    spotify: string;
}
  
export interface Image {
    height: number;
    url: string;
    width: number;
}
  
export interface ExternalIDS {
    isrc: string;
}
  
export interface Token {
    access_token: string;
    token_type: string;
    expires_in: string;
}
  
export interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
} 
