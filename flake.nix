{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default =
          with pkgs;
          mkShell {
            buildInputs = [
              bun
            ];
            # sharp's prebuilt native binaries (via @nuxt/image) link against
            # libstdc++ at runtime, which the nix shell doesn't otherwise expose.
            LD_LIBRARY_PATH = lib.makeLibraryPath [ stdenv.cc.cc.lib ];
          };
      }
    );
}
