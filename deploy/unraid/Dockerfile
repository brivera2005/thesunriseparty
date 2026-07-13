FROM node:22-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    git \
    ca-certificates \
    python3 \
    curl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY entrypoint.sh run-update.sh ./
RUN chmod +x entrypoint.sh run-update.sh

ENV NODE_ENV=production \
    REPO_DIR=/workspace/sunrise \
    MOUNT_MODE=clone \
    UPDATE_HOURS=2 \
    RUN_ON_START=1 \
    PAGES_PROJECT=thesunriseparty \
    PAGES_BRANCH=main \
    PUSH_DATA_UPDATES=0 \
    TZ=America/Chicago

VOLUME ["/workspace"]

CMD ["./entrypoint.sh"]
